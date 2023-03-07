import { elements } from "./index";
const drawAxis = (ctx, { zoom, scrollX, scrollY }) => {
  ctx.save();
  const rectH = 100 * zoom.value; // 纵轴刻度间距
  const rectW = 100 * zoom.value; // 横轴刻度间距
  const tickLength = 8 * zoom.value; // 刻度线长度
  const canvas = ctx.canvas;
  const offsetX = scrollX * zoom.value;
  const offsetY = scrollY * zoom.value;
  ctx.translate(offsetX, offsetY);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  // 绘制横轴和纵轴
  ctx.save();
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.moveTo(0, -offsetY);
  ctx.lineTo(0, canvas.height - offsetY);
  ctx.moveTo(-offsetX, 0);
  ctx.lineTo(canvas.width - offsetX, 0);
  ctx.stroke();
  ctx.restore();
  // 绘制横轴和纵轴刻度
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.textBaseline = "middle";
  for (let i = 0; i < offsetY / rectH; i++) {
    // 绘制纵轴负数刻度
    ctx.moveTo(0, -i * rectH);
    ctx.lineTo(tickLength, -i * rectH);
    ctx.font = `${20 * zoom.value}px Arial`;
    ctx.fillText(-i, -25, -i * rectH);
  }
  for (let i = 0; i < (canvas.height - offsetY) / rectH; i++) {
    // 绘制纵轴正数刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = `${20 * zoom.value}px Arial`;
    ctx.fillText(i, -25, i * rectH);
  }
  for (let i = 1; i < offsetX / rectW; i++) {
    // 绘制横轴负数刻度
    ctx.moveTo(-i * rectW, 0);
    ctx.lineTo(-i * rectW, tickLength);
    ctx.font = `${20 * zoom.value}px Arial`;
    ctx.fillText(-i, -i * rectW - 10, -15);
  }
  for (let i = 1; i < (canvas.width - offsetX) / rectW; i++) {
    // 绘制横轴正数刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = `${20 * zoom.value}px Arial`;
    ctx.fillText(i, i * rectW - 5, -15);
  }
  ctx.stroke();

  ctx.restore();
};
const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    ctx.save();
    console.log('appStsate...', appState.scrollX)
    ctx.translate(
      (ele.x + appState.scrollX) * appState.zoom.value,
      (ele.y + appState.scrollY) * appState.zoom.value
    );
    // ctx.translate(ele.x + appState.scrollX, ele.y + appState.scrollY);
    ctx.scale(appState.zoom.value, appState.zoom.value);
    ctx.strokeStyle = ele.strokeStyle;
    ctx.strokeColor = ele.strokeColor;
    ctx.strokeRect(0, 0, ele.width, ele.height);
    ctx.restore();
  });
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawAxis(context, appState);
  renderElements(context, appState);
};

export default renderScene;
