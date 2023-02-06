const drawAxis = (ctx) => {
  ctx.save();
  const rectH = 100; // 纵轴刻度间距
  const rectW = 100; // 横轴刻度间距
  const tickLength = 8; // 刻度线长度
  const canvas = ctx.canvas;
  ctx.translate(0, 0);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  // 绘制横轴和纵轴
  ctx.save();
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, canvas.height);
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();
  ctx.restore();
  // 绘制横轴和纵轴刻度
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.textBaseline = "middle";

  for (let i = 0; i < canvas.height / rectH; i++) {
    // 绘制纵轴刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(i, -25, i * rectH);
  }
  for (let i = 1; i < canvas.width / rectW; i++) {
    // 绘制横轴刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(i, i * rectW - 5, -15);
  }
  ctx.stroke();

  ctx.restore();
};

export default drawAxis