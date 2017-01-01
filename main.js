
"use strict";

(function () {

    let startTimer = performance.now();

    function intersect(...args) {

        let searchList = args
            .filter((argument) => Array.isArray(argument)) // mb it is not an Array ?
            .map((element) => [...new Set(element)])    // unification
            .sort((a, b) => a.length - b.length);  // first array is the smallest

        return searchList.shift().filter((v) => searchList.every((a) => a.indexOf(v) !== -1));  // check if every array contains elements of first array

    }

    let res = intersect([3,4,5,6,2,2],[3,2,3],[2,4,8,9,2,3,3,3,4]);

    console.log('result:', res);

    let stopTimer = performance.now();

    console.log('It took ' + (stopTimer - startTimer) + ' ms.');

})();