import {Rectangle} from './rectangle';

export class RectangleApp {

    constructor (rectangleCount, canvas, code) {

        this.rectangleCount = rectangleCount;
        this.canvas         = canvas;
        this.code           = code;

        this.buildApp();
    }

    buildApp () {

        this.arrays = this.generateArrays();
        this.code.innerHTML = this.buildString();

        this.renderCanvas();
    }

    generateArrays () {

        let i = 0,
            array = [];

        while (i < this.rectangleCount) {
            array.push(this.generateArray());
            i++;
        }

        return array;
    }

    generateArray() {

        let firstCoord = Math.floor((Math.random() * 100) + 1);

        return [
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 360) + 1)
        ]

    }

    buildString() {

        let string = '';

        this.arrays.forEach((val, index) => {

            string+=`[${val}]\n`;

            if((index + 1) % 2  === 0) {
                string+='\n'
            }

        });

        return string;
    }

}