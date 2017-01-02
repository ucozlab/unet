
"use strict";

import {RectangleApp} from './app/js/rectangle-app';

(function () {

    const
        rectangleCount = 10,
        btn    = document.getElementById('renderBtn'),
        canvas = document.getElementById('canvas'),
        code   = document.getElementById('codeBlock');

    btn.addEventListener('click', () => new RectangleApp(rectangleCount, canvas, code));

})();