// class Board {
//     constructor() {
//         this.statusConfig = {
//             scrollX: 0,
//             scrollY: 0
//         }
//         console.log('构造函d数...', this.statusConfig)
//     }
//     init(canvas){
//         this.canvas = canvas;
//         const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;

//         canvas.width = offsetWidth * window.devicePixelRatio;
//         canvas.height = offsetHeight * window.devicePixelRatio;

//         this.addCanvasListener();
//         this.ctx = canvas.getContext("2d");
//         this.drawAxis()
//     }
//     addCanvasListener() {
//         this.canvas.addEventListener('wheel', e => this.handleCanvasWheel(e), {
//             passive: false,
//         });

//         this.canvas.addEventListener('pointerdown', e => this.handleCanvasPointerDown(e), {
//             passive: false,
//         });

//     }

//     handleCanvasWheel(event){
//         const { deltaX, deltaY } = event;

//         this.statusConfig.scrollX = this.statusConfig.scrollX - deltaX
//         this.statusConfig.scrollY = this.statusConfig.scrollY - deltaY
//         console.log('whe444430el', this.statusConfig.scrollX, this.statusConfig.scrollY)
//     }
//     handleCanvasPointerDown(event){
//         // this.savePointer(event.clientX, event.clientY, "down");
//         // const pointerDownState = this.initialPointerDownState(event);

//         console.log('canvas pointer down..', event)
//     }

// }

// export default Board;

export const drawAxis = (ctx) => {
  const rectH = 30; // 纵轴刻度间距
  const rectW = 30; // 横轴刻度间距
  const tickLength = 15; // 刻度线长度
  ctx.save();
  ctx.lineWidth = 2;
  const canvas = ctx.canvas;
  for (let i = 0; i < canvas.width / rectH; i++) {
    // 绘制纵轴刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(i, 0, i * rectH);
    // 绘制横轴刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(i, i * rectW, 8);
  }
  ctx.stroke();
  ctx.restore();
};
