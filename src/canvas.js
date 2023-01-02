// 1.window.devicePixelRatio解决锯齿感

class Board {
    constructor(canvas) {
        this.canvas = canvas;
        this.points = [];
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;
        this.config = {
            offsetLeft,
            offsetTop,
        };

        canvas.width = offsetWidth * window.devicePixelRatio;
        canvas.height = offsetHeight * window.devicePixelRatio;
        this.ctx = canvas.getContext("2d");
        this.ctx.lineWidth = 10;

        this.onMouseDownInCanvasBind = this.onMouseDownInCanvas.bind(this);
        this.onMouseMoveInDocBind = this.onMouseMoveInDoc.bind(this);
        this.onMouseUpInDocBind = this.onMouseUpInDoc.bind(this);

        this.initListener();

        // ctx.translate(100, 100);
        // ctx.scale(5, 2)
        // ctx.rotate(Math.PI / 6)
        // ctx.fillRect(0, 0, 500, 50);

        // const path1 = new Path2D();
        // path1.rect(10, 10, 100, 100);

        // const path2 = new Path2D(path1);
        // path2.moveTo(220, 60);
        // path2.arc(170, 60, 50, 0, 2 * Math.PI);

        // ctx.stroke(path2);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (this.points.length === 1) {
            this.ctx.moveTo(...this.points[0]);
        } else {
            this.ctx.lineTo(...this.points[this.points.length - 1]);
        }
        this.ctx.stroke();
    }
    onMouseMoveInDoc(e) {
        console.log('mouse move..')
        this.points.push([
            (e.pageX - this.config.offsetLeft) * window.devicePixelRatio,
            (e.pageY - this.config.offsetTop) * window.devicePixelRatio,
        ]);
        this.draw();
    }
    onMouseUpInDoc() {
        console.log('mouse up..')
        document.removeEventListener("mousemove", this.onMouseMoveInDocBind);
        document.removeEventListener("mouseup", this.onMouseUpInDocBind);
    }
    onMouseDownInCanvas() {
        console.log('mouse down')
        this.points = [];
        document.addEventListener("mousemove", this.onMouseMoveInDocBind);
        document.addEventListener("mouseup", this.onMouseUpInDocBind);
    }

    initListener(canvas) {
        this.canvas.addEventListener("mousedown", this.onMouseDownInCanvasBind);
    }
}

export default Board;
