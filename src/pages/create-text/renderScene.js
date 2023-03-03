import { elements } from "./index";
import { getElementAbsoluteCoords } from "@/util";
import { getFontString } from "./element";
import { elementKey } from "./constant";
let previewCanvas = null;
const elementWithCanvasCache = new WeakMap();

export const deleteElementCache = (element) => {
  elementWithCanvasCache.delete(element);
};
const generateCanvas = (ele) => {
  const prevElementWithCanvas = elementWithCanvasCache.get(ele);

  if (prevElementWithCanvas) {
    return prevElementWithCanvas;
  }
  // 离屏canvas绘制
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const offscreenContainer = document.getElementById("offscreen");

  // if (previewCanvas) {
  //   offscreenContainer.removeChild(previewCanvas);
  // }
  // previewCanvas = canvas;
  // offscreenContainer.appendChild(previewCanvas);

  const padding = 20;
  canvas.width = ele.width * window.devicePixelRatio + padding * 2;
  canvas.height = ele.height * window.devicePixelRatio + padding * 2;
  context.save();
  context.translate(padding, padding);
  context.scale(window.devicePixelRatio, window.devicePixelRatio);

  // 绘制离屏canvas
  context.font = getFontString(ele);
  context.fillStyle = ele.strokeColor;
  context.textAlign = ele.textAlign;
  context.fillText(
    ele.text,
    0,
    18,
  )

  context.restore();

  elementWithCanvasCache.set(ele, canvas);
  return canvas;
};
const renderElements = (ctx, appState) => {
  elements.forEach((ele) => {
    // 离屏canvas绘制
    const canvas = generateCanvas(ele);
    let [x1, y1, x2, y2] = getElementAbsoluteCoords(ele);

    const padding = 20;

    // 真正绘制
    const cx = ((x1 + x2) / 2 + appState.scrollX) * window.devicePixelRatio;
    const cy = ((y1 + y2) / 2 + appState.scrollY) * window.devicePixelRatio;

    ctx.save();
    ctx.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
    ctx.translate(cx, cy);
    console.log()
    ctx.drawImage(
      canvas,
      (-(x2 - x1) / 2) * window.devicePixelRatio - padding,
      (-(y2 - y1) / 2) * window.devicePixelRatio - padding,
      canvas.width,
      canvas.height
    );

    ctx.restore();
  });
};
const renderScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderElements(context, appState);
  localStorage.setItem(elementKey, JSON.stringify(elements));
};

const renderDraggingElement = (ctx, appState) => {
  const element = appState.draggingElement;
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = element.strokeStyle;

  element.points.forEach((point, index) => {
    if (!index) {
      ctx.moveTo(...element.points[0]);
    } else {
      ctx.lineTo(...point);
    }
  });

  ctx.stroke();

  ctx.restore();
};
export const renderDraggingScene = (canvas, appState) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderDraggingElement(context, appState);
};

export default renderScene;
