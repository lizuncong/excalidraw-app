import { renderElement } from './renderElement'
export const drawAxis = (ctx, { scrollX, scrollY }) => {
  ctx.save();

  const rectH = 100; // 纵轴刻度间距
  const rectW = 100; // 横轴刻度间距
  const tickLength = 8; // 刻度线长度
  const canvas = ctx.canvas;
  ctx.translate(scrollX, scrollY);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
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

export const renderScene = ({
  elements,
  appState,
  scale,
  canvas,
  renderConfig,
}) => {
  console.log("renderscene...");
  const context = canvas.getContext("2d");

  context.setTransform(1, 0, 0, 1, 0, 0);
  context.save();
  context.scale(scale, scale);
  // When doing calculations based on canvas width we should used normalized one
  const normalizedCanvasWidth = canvas.width / scale;
  const normalizedCanvasHeight = canvas.height / scale;
  if (renderConfig.viewBackgroundColor) {
    context.save();
    context.fillStyle = renderConfig.viewBackgroundColor;
    context.fillRect(0, 0, normalizedCanvasWidth, normalizedCanvasHeight);
    context.restore();
  }

  // Apply zoom
  context.save();
  context.scale(renderConfig.zoom, renderConfig.zoom);

  // render element
  elements.forEach((element) => {
    renderElement(element, context, renderConfig, appState);
  });
  // Reset zoom
  context.restore();

  context.restore();
};

export const renderCanvas = (ctx, renderConfig) => {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxis(ctx, renderConfig);
};
