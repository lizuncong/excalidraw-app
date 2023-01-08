class Board {
    constructor(canvas) {
        this.canvas = canvas;
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;

        canvas.width = offsetWidth * window.devicePixelRatio;
        canvas.height = offsetHeight * window.devicePixelRatio;

        this.statusConfig = {
            scrollX: 0,
            scrollY: 0
        }

        this.initListener();
        this.ctx = canvas.getContext("2d");
        this.drawAxis()
    }
    drawAxis(){
        const rectH = 30; // 纵轴刻度间距
        const rectW = 30; // 横轴刻度间距
        const tickLength = 15; // 刻度线长度
        this.ctx.lineWidth = 2;

        for(let i = 0; i < this.canvas.width / rectH; i++){
            // 绘制纵轴刻度
            this.ctx.moveTo(0, i * rectH)
            this.ctx.lineTo(tickLength,i * rectH)
            this.ctx.font = "20px Arial";
            this.ctx.fillText(i, 0, i * rectH)
            // 绘制横轴刻度
            this.ctx.moveTo(i * rectW, 0)
            this.ctx.lineTo(i * rectW, tickLength)
            this.ctx.font = "20px Arial";
            this.ctx.fillText(i, i * rectW, 8)

        }
        this.ctx.stroke()

    }
    handleWheel(event){
        const { deltaX, deltaY } = event;
    
        this.statusConfig.scrollX = this.statusConfig.scrollX - deltaX
        this.statusConfig.scrollY = this.statusConfig.scrollY - deltaY
        console.log('wheel', this.statusConfig.scrollX, this.statusConfig.scrollY)
    }
    handleCanvasPointerDown(event){
        console.log('canvas pointer down..', event)
    }
    initListener(){
        this.canvas.addEventListener('wheel', e => this.handleWheel(e), {
            passive: false,
        });

        this.canvas.addEventListener('pointerdown', e => this.handleCanvasPointerDown(e), {
            passive: false,
        });

    }
}

export default Board;
