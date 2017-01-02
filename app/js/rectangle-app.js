import {Rectangle} from './rectangle';
import {RenderCanvas} from './canvas';

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

        return new RenderCanvas(this.canvas, this.arrays);
    }

    generateArrays () {

        let i = 0,
            array = [];

        while (i < this.rectangleCount) {
            array.push(new Rectangle());
            i++;
        }

        return array;
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