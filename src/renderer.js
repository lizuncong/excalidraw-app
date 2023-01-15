export const drawSelection = (context, { scrollX, scrollY }) => {
  context.save();
  context.translate(scrollX, scrollY);
  context.fillStyle = "rgba(0, 0, 200, 0.04)";

  context.fillRect(0, 0, 200, 200);
  context.lineWidth = 1;
  context.strokeStyle = "rgb(105, 101, 219)";
  context.strokeRect(0, 0, 200, 200);

  context.restore();
};

export const drawAxis = (ctx, { scrollX, scrollY }) => {
  ctx.save();

  const rectH = 30; // 纵轴刻度间距
  const rectW = 30; // 横轴刻度间距
  const tickLength = 15; // 刻度线长度
  const canvas = ctx.canvas;
  ctx.translate(scrollX, scrollY);
  // ctx.beginPath();
  ctx.lineWidth = 2;
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
  // ctx.closePath();

  ctx.restore();
};

export const renderCanvas = (ctx, renderConfig) => {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxis(ctx, renderConfig);
  drawSelection(ctx, renderConfig);
};
