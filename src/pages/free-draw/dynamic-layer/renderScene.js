import { elements } from "./index";
import { getElementAbsoluteCoords, distance, setCanvasSize } from "./util";
// let previewCanvas = null;
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

  // const offscreenContainer = document.getElementById("offscreen");

  // if (previewCanvas) {
  //   offscreenContainer.removeChild(previewCanvas);
  // }
  // previewCanvas = canvas;
  // offscreenContainer.appendChild(previewCanvas);

  let [x1, y1, x2, y2] = getElementAbsoluteCoords({
    ...ele,
    points: ele.points.map((p) => {
      return [p[0] - ele.x, p[1] - ele.y];
    }),
  });
  let canvasOffsetX = 0;
  let canvasOffsetY = 0;
  const padding = 20;
  canvas.width = distance(x1, x2) * window.devicePixelRatio + padding * 2;
  canvas.height = distance(y1, y2) * window.devicePixelRatio + padding * 2;
  canvasOffsetX =
    ele.x > x1 ? distance(ele.x, x1) * window.devicePixelRatio : 0;

  canvasOffsetY =
    ele.y > y1 ? distance(ele.y, y1) * window.devicePixelRatio : 0;

  context.translate(canvasOffsetX, canvasOffsetY);
  context.save();
  context.translate(padding, padding);
  context.scale(window.devicePixelRatio, window.devicePixelRatio);

  context.lineWidth = 3;
  context.strokeStyle = ele.strokeStyle;
  ele.points.forEach((point, index) => {
    let [x, y] = point;
    x = x - ele.x;
    y = y - ele.y;
    if (!index) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  });

  context.stroke();

  context.restore();

  elementWithCanvasCache.set(ele, canvas);
  return canvas;
};
const renderElements = (elements, ctx, appState) => {
  elements.forEach((ele) => {
    // 离屏canvas绘制
    const canvas = generateCanvas(ele);
    let [x1, y1, x2, y2] = getElementAbsoluteCoords({
      ...ele,
      points: ele.points.map((p) => {
        return [p[0] - ele.x, p[1] - ele.y];
      }),
    });

    const padding = 20;

    // 真正绘制
    // x1 = Math.floor(x1);
    // x2 = Math.ceil(x2);
    // y1 = Math.floor(y1);
    // y2 = Math.ceil(y2);
    const cx = ((x1 + x2) / 2 + appState.scrollX) * window.devicePixelRatio;
    const cy = ((y1 + y2) / 2 + appState.scrollY) * window.devicePixelRatio;

    ctx.save();
    ctx.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
    ctx.translate(cx, cy);

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
let dynamicCanvas = [];
const maxSize = 200; // 分割点，一个canvas负责绘制500个元素
function splitElements(arr, len) {
  const group = [];
  for (var i = 0; i < arr.length; i += len) {
    group.push(arr.slice(i, i + len));
  }
  return group;
}
const renderScene = (canvasContainer, canvas, appState) => {
  const { offsetWidth, offsetHeight } = canvas;

  // 先清空上一次的canvas
  dynamicCanvas.forEach((dynamicCanva) => {
    canvasContainer.removeChild(dynamicCanva);
  });
  dynamicCanvas = [];
  const newGroup = splitElements(elements, maxSize);
  if (!newGroup.length) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  newGroup.forEach((subElements, idx) => {
    if (idx < newGroup.length - 1) {
      const newCanvas = document.createElement("canvas");
      canvasContainer.insertBefore(newCanvas, canvas);
      newCanvas.classList.add(`canvas`);
      newCanvas.innerText = `动态canvas ${idx}`;
      setCanvasSize(newCanvas, offsetWidth, offsetHeight);
      dynamicCanvas.push(newCanvas);
      // 绘制
      const context = newCanvas.getContext("2d");
      Promise.resolve().then(() => {
        renderElements(subElements, context, appState);
      });
    } else {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      renderElements(subElements, context, appState);
    }
  });

  localStorage.setItem("free-draw-elements", JSON.stringify(elements));
};

// const renderScene2 = (canvas, appState) => {
//   const context = canvas.getContext("2d");
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   renderElements(context, appState);
//   localStorage.setItem("free-draw-elements", JSON.stringify(elements));
// };

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
