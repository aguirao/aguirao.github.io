class TurtleCanvas {

    #positionX;
    #positionY;
    #direction;

    constructor(realBGCanvas, realFGCanvas) {
        this.bg = realBGCanvas.getContext("2d");
        this.fg = realFGCanvas.getContext("2d");
        this.width = realBGCanvas.width;
        this.height = realBGCanvas.height;
        this.#positionX = this.width/2;
        this.#positionY = this.height/2;
        this.#direction = 0;
    }

    draw = () => {
        this.#drawTurtle();
    }

    fd = pixels => {
        this.#move(this.#direction, pixels);
    }

    bk = pixels => {
        this.#move(this.#direction, -pixels);
    }

    rt = degrees => {
        this.#turn(degrees);
    }

    lt = degrees => {
        this.#turn(-degrees);
    }

    error = msg => {
        alert(msg);
    }

    #drawTurtle = () => {
        let x = this.#positionX;
        let y = this.#positionY;
        let angle = this.#direction;
        let size = 8;
        let baseReduct = 2;
        let fg = this.fg;
        this.#clearFG();
        fg.translate(x, y);
        fg.rotate(angle * Math.PI / 180);
        fg.translate(-x, -y);
        fg.beginPath();
        fg.moveTo(x-size+baseReduct, y+size);
        fg.lineTo(x+size-baseReduct, y+size);
        fg.lineTo(x, y-size);
        fg.fill();
        fg.translate(x, y);
        fg.rotate(-angle * Math.PI / 180);
        fg.translate(-x, -y);
    }

    #move = (direction, pixels) => {
        this.#clearFG();
        let x0 = this.#positionX;
        let y0 = this.#positionY;
        let x1 = x0 + this.#calcDeltaX(x0, y0, direction, pixels);
        let y1 = y0 + this.#calcDeltaY(x0, y0, direction, pixels);
        this.#drawLine(x0, y0, x1, y1);
        this.#positionX = x1;
        this.#positionY = y1;
        this.#drawTurtle();
    }

    #calcDeltaX = (x, y, angle, pixels) => {
        let radians = this.#direction * Math.PI / 180;
        return Math.sin(radians)*pixels;
    }

    #calcDeltaY = (x, y, angle, pixels) => {
        let radians = this.#direction * Math.PI / 180;
        return -Math.cos(radians)*pixels;
    }

    #drawLine = (x0, y0, x1, y1) => {
        let bg = this.bg;
        bg.beginPath();
        bg.moveTo(x0, y0);
        bg.lineTo(x1, y1);
        bg.stroke();
    }

    #turn = degrees => {
        this.#direction = this.#direction + degrees;
        this.#drawTurtle();
    }

    #clearFG = () => {
        this.fg.clearRect(0, 0, this.width, this.height);
    }

}
