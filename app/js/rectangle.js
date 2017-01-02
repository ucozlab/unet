export class Rectangle {

    constructor() {
        this.maxSize = 20;
        return this.generateArray()
    }

    generateArray() {

        const
            startX = this.randomIntFromInterval(0, 860 - this.maxSize),
            startY = this.randomIntFromInterval(0, 640 - this.maxSize),
            endX   = this.randomIntFromInterval(startX, startX + this.maxSize),
            endY   = this.randomIntFromInterval(startY, startY + this.maxSize),
            angle  = this.randomIntFromInterval(0, 360);

        return [startX, startY, endX, endY, angle]

    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}
