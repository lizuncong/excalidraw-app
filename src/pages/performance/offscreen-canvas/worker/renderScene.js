import { renderElement } from "./renderElement";
import { getElementBounds, viewportCoordsToSceneCoords } from "./util";

export const drawAxis = (ctx, { scrollX, scrollY, zoom }) => {
  ctx.save();
  const rectH = 100; // 纵轴刻度间距
  const rectW = 100; // 横轴刻度间距
  const tickLength = 8; // 刻度线长度
  const canvas = ctx.canvas;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  // 绘制横轴和纵轴刻度
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.textBaseline = "middle";
  ctx.save();
  ctx.translate(0, scrollY);
  for (let i = 0; i < scrollY / rectH; i++) {
    // 绘制纵轴刻度
    ctx.moveTo(0, -i * rectH);
    ctx.lineTo(tickLength, -i * rectH);
    ctx.font = "10px Arial";
    ctx.fillText(-i, 0, -i * rectH + 10);
  }
  for (
    let i = 1;
    i < (canvas.height - scrollY * zoom.value) / (rectH * zoom.value);
    i++
  ) {
    // 绘制纵轴刻度
    ctx.moveTo(0, i * rectH);
    ctx.lineTo(tickLength, i * rectH);
    ctx.font = "10px Arial";
    ctx.fillText(i, 0, i * rectH + 10);
  }
  ctx.restore();
  ctx.save();
  ctx.translate(scrollX, 0);

  for (let i = 0; i < scrollX / rectW; i++) {
    // 绘制横轴刻度
    ctx.moveTo(-i * rectW, 0);
    ctx.lineTo(-i * rectW, tickLength);
    ctx.font = "10px Arial";
    ctx.fillText(-i, -i * rectW + 5, 5);
  }
  for (
    let i = 1;
    i < (canvas.width - scrollX * zoom.value) / (rectW * zoom.value);
    i++
  ) {
    // 绘制横轴刻度
    ctx.moveTo(i * rectW, 0);
    ctx.lineTo(i * rectW, tickLength);
    ctx.font = "10px Arial";
    ctx.fillText(i, i * rectW + 5, 5);
  }
  ctx.restore();
  ctx.stroke();

  ctx.restore();
};

const isVisibleElement = (
  element,
  canvasWidth,
  canvasHeight,
  viewTransformations
) => {
  const [x1, y1, x2, y2] = getElementBounds(element); // scene coordinates
  const topLeftSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft,
      clientY: viewTransformations.offsetTop,
    },
    viewTransformations
  );
  const bottomRightSceneCoords = viewportCoordsToSceneCoords(
    {
      clientX: viewTransformations.offsetLeft + canvasWidth,
      clientY: viewTransformations.offsetTop + canvasHeight,
    },
    viewTransformations
  );

  return (
    topLeftSceneCoords.x <= x2 &&
    topLeftSceneCoords.y <= y2 &&
    bottomRightSceneCoords.x >= x1 &&
    bottomRightSceneCoords.y >= y1
  );
};
export const renderScene = ({
  elements,
  appState,
  scale,
  canvas,
  renderConfig,
}) => {
  const context = canvas.getContext("2d");

  context.save();
  context.scale(scale, scale);

  const normalizedCanvasWidth = canvas.width / scale;
  const normalizedCanvasHeight = canvas.height / scale;
  context.clearRect(0, 0, normalizedCanvasWidth, normalizedCanvasHeight);

  context.save();
  // 先放大
  context.scale(renderConfig.zoom.value, renderConfig.zoom.value);
  if (!renderConfig.isExport || !elements) {
    drawAxis(context, renderConfig);
  }
  if (elements) {
    const visibleElements = elements.filter((element) =>
      isVisibleElement(element, normalizedCanvasWidth, normalizedCanvasHeight, {
        zoom: renderConfig.zoom,
        offsetLeft: appState.offsetLeft,
        offsetTop: appState.offsetTop,
        scrollX: renderConfig.scrollX,
        scrollY: renderConfig.scrollY,
      })
    );
    // const total = document.getElementById("canvas-total");
    // total.innerText = `总元素数：${elements.length}   实际绘制元素总数：${visibleElements.length}`;
    console.log(
      `worker绘制元素总数：${elements.length}，实际绘制元素总数：${visibleElements.length}`
    );
    visibleElements.forEach((element) => {
      renderElement(element, context, renderConfig, appState);
    });
  }

  context.restore();

  context.restore();
  if (elements) {
    // localStorage.setItem("elements", JSON.stringify(elements));
  }
  //   localStorage.setItem("appState", JSON.stringify(appState));
};
