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

	(function () {

	    var startTimer = performance.now();

	    function intersect() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var resultArray = [],
	            arrays = args.filter(function (argument) {
	            return Array.isArray(argument);
	        }),
	            // mb it is not an Array ?
	        firstArray = removeDuplicates(arrays[0]);

	        firstArray.forEach(function (value) {

	            var i = 0;

	            while (i < arrays.length && searchValueInNextArray(value, i)) {
	                // if has 2 or > consilience search further

	                if (i === arrays.length - 1) {
	                    return resultArray.push(value);
	                }

	                i++;
	            }
	        });

	        function searchValueInNextArray(value, index) {
	            return arrays[index].indexOf(value) != -1;
	        }

	        function removeDuplicates(array) {
	            return array.filter(function (item, index) {
	                return array.indexOf(item) == index;
	            });
	        }

	        return resultArray;
	    }

	    var res = intersect([3, 4, 5, 6, 2, 2], [1, 2, 3], [2, 4, 8, 9, 2, 3, 3, 3, 4]);

	    console.log('result:', res);

	    var stopTimer = performance.now();

	    console.log('It took ' + (stopTimer - startTimer) + ' ms.');
	})();

/***/ }
/******/ ]);