export const drawSelection = (context, { scrollX, scrollY }) => {
  context.save();
  context.translate(20 + scrollX, 20 + scrollY);
  context.fillStyle = "rgba(0, 0, 200, 0.04)";

  context.fillRect(0, 0, 200, 200);
  context.lineWidth = 1;
  context.strokeStyle = "rgb(105, 101, 219)";
  context.strokeRect(0, 0, 200, 200);

  context.restore();
};

export const drawAxis = (ctx, { scrollX, scrollY }) => {
  ctx.save();

  const rectH = 100; // 纵轴刻度间距
  const rectW = 100; // 横轴刻度间距
  const tickLength = 8; // 刻度线长度
  const canvas = ctx.canvas;
  ctx.translate(scrollX, scrollY);
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'red'
  // 绘制横轴和纵轴
  ctx.save();
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.moveTo(0, -scrollY);
  ctx.lineTo(0, canvas.height - scrollY);
  ctx.moveTo(-scrollX, 0);
  ctx.lineTo(canvas.width - scrollX, 0);
  ctx.stroke();
  ctx.restore();
  // 绘制横轴和纵轴刻度
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.textBaseline = "middle";
  for (let i = 0; i < scrollY / rectH; i++) {
    // 绘制纵轴刻度
    ctx.moveTo(0, -i * rectH);
    ctx.lineTo(tickLength, -i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(-i, -25, -i * rectH);
  }
  for (let i = 0; i < (canvas.height - scrollY) / rectH; i++) {
    // 绘制纵轴刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(i, -25, i * rectH);
  }
  for (let i = 1; i < scrollX / rectW; i++) {
    // 绘制横轴刻度
    ctx.moveTo(-i * rectW, 0);
    ctx.lineTo(-i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(-i, -i * rectW - 10, -15);
  }
  for (let i = 1; i < (canvas.width - scrollX) / rectW; i++) {
    // 绘制横轴刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(i, i * rectW - 5, -15);
  }
  ctx.stroke();

  ctx.restore();
};

export const renderCanvas = (ctx, renderConfig) => {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxis(ctx, renderConfig);
  drawSelection(ctx, renderConfig);
};
