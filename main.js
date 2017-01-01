"use strict";

(function () {

    let startTimer = performance.now();

    function intersect(...args) {

        let resultArray = [],
            arrays      = args
                .filter((argument) => Array.isArray(argument)) // mb it is not an Array ?
                .sort((a, b) => a.length - b.length),  // first array is the smallest

            firstArray  = removeDuplicates(arrays[0]);

        firstArray.forEach((value) => {

            let i = 0;

            while (i < arrays.length && searchValueInNextArray(value, i)) { // if has 2 or > consilience search further

                if (i === arrays.length - 1) {
                    return resultArray.push(value);
                }

                i++;

            }

        });

        function searchValueInNextArray(value, index) {
            return arrays[index].indexOf(value) != -1
        }

        function removeDuplicates(array) {
            return array.filter((item,index) => array.indexOf(item) == index);
        }

        return resultArray;

    }

    let res = intersect([3,4,5,6,2,2],[1,2,3],[2,4,8,9,2,3,3,3,4]);

    console.log('result:', res);

    let stopTimer = performance.now();

    console.log('It took ' + (stopTimer - startTimer) + ' ms.');

})();