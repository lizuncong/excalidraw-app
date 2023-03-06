import { elements } from "./index";
const drawAxis = (ctx, { scrollX, scrollY }) => {
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
    // 绘制纵轴负数刻度
    ctx.moveTo(0, -i * rectH);
    ctx.lineTo(tickLength, -i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(-i, -25, -i * rectH);
  }
  for (let i = 0; i < (canvas.height - scrollY) / rectH; i++) {
    // 绘制纵轴正数刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = "20px Arial";
    ctx.fillText(i, -25, i * rectH);
  }
  for (let i = 1; i < scrollX / rectW; i++) {
    // 绘制横轴负数刻度
    ctx.moveTo(-i * rectW, 0);
    ctx.lineTo(-i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(-i, -i * rectW - 10, -15);
  }
  for (let i = 1; i < (canvas.width - scrollX) / rectW; i++) {
    // 绘制横轴正数刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = "20px Arial";
    ctx.fillText(i, i * rectW - 5, -15);
  }
  ctx.stroke();

  ctx.restore();
};
const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    ctx.save();
    ctx.translate((ele.x + appState.scrollX) * appState.zoom.value , (ele.y + appState.scrollY) * appState.zoom.value);
    console.log('zoom..', ele.x, ele.y, appState.scrollX, appState.scrollY, appState.zoom.value)
    ctx.scale(appState.zoom.value, appState.zoom.value)
    ctx.strokeStyle = ele.strokeStyle;
    ctx.strokeColor = ele.strokeColor;
    ctx.strokeRect(0, 0, ele.width, ele.height);
    ctx.restore();
  });
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width, canvas.height)
  drawAxis(context, appState);
  renderElements(context, appState)
};

export default renderScene;
