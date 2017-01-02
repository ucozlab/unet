export class RenderCanvas {

    constructor (canvas, rectangles) {
        this.context = canvas.getContext('2d');
        this.width   = canvas.width;
        this.height  = canvas.height;
        this.rectangles = rectangles;

        this.clearCanvas();
        this.renderRectangles()
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.beginPath();
    }
    // cv.clearRect(0, 0, w, h);
    // cv.fillStyle = 'rgba(0, 255, 0, 1.0)';
    // cv.fillRect(0, 0, w, h);

    renderRectangles() {

        this.rectangles.forEach((rectangle)=> {
            const [startX, startY, endX, endY, angle] = [...rectangle];
            this.context.rect(startX, startY, endX, endY);
            this.context.stroke();
        })

    }

}