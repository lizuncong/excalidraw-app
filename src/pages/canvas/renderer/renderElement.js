import { getElementAbsoluteCoords, distance } from "@/util";
export const renderElement = (element, context, renderConfig, appState) => {
  const elementWithCanvas = generateElementWithCanvas(element, renderConfig);
  drawElementFromCanvas(elementWithCanvas, context, renderConfig);
};

const elementWithCanvasCache = new WeakMap();

export const deleteElementCache = (element) => {
  elementWithCanvasCache.delete(element);
};

const generateElementWithCanvas = (element, renderConfig) => {
  const zoom = renderConfig.zoom || 1;
  const prevElementWithCanvas = elementWithCanvasCache.get(element);
  if (prevElementWithCanvas) {
    console.log("复用之前的canvas========================");
    return prevElementWithCanvas;
  }
  const elementWithCanvas = generateElementCanvas(element, zoom, renderConfig);

  elementWithCanvasCache.set(element, elementWithCanvas);

  return elementWithCanvas;
};
let rightContainer = document.getElementById("placeholder");
let previewCanvas = null;
const generateElementCanvas = (element, zoom, renderConfig) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const padding = getCanvasPadding(element);
  if (!rightContainer) {
    rightContainer = document.getElementById("placeholder");
  }
  if (previewCanvas) {
    rightContainer.removeChild(previewCanvas);
  }
  previewCanvas = canvas;
  rightContainer.appendChild(previewCanvas);

  let canvasOffsetX = 0;
  let canvasOffsetY = 0;
  if (element.type === "freedraw") {
    let [x1, y1, x2, y2] = getElementAbsoluteCoords({
      ...element,
      points: element.points.map((p) => {
        return [p[0] - element.x, p[1] - element.y];
      }),
    });
    let canvasOffsetX = 0;
    let canvasOffsetY = 0;
    const padding = 20;
    canvas.width = distance(x1, x2) * window.devicePixelRatio + padding * 2;
    canvas.height = distance(y1, y2) * window.devicePixelRatio + padding * 2;
    canvasOffsetX =
      element.x > x1 ? distance(element.x, x1) * window.devicePixelRatio : 0;

    canvasOffsetY =
      element.y > y1 ? distance(element.y, y1) * window.devicePixelRatio : 0;

    context.translate(canvasOffsetX, canvasOffsetY);
  } else {
    canvas.width =
      element.width * window.devicePixelRatio * zoom + padding * zoom * 2;
    canvas.height =
      element.height * window.devicePixelRatio * zoom + padding * zoom * 2;
  }

  context.save();
  context.translate(padding * zoom, padding * zoom);

  context.scale(window.devicePixelRatio * zoom, window.devicePixelRatio * zoom);

  drawElementOnCanvas(element, context, renderConfig);
  context.restore();

  return {
    element,
    canvas,
    theme: renderConfig.theme,
    canvasZoom: zoom,
    canvasOffsetX,
    canvasOffsetY,
  };
};

const drawElementOnCanvas = (element, context, renderConfig) => {
  context.globalAlpha = element.opacity / 100;
  switch (element.type) {
    case "rectangle": {
      context.lineJoin = "round";
      context.lineCap = "round";
      context.strokeStyle = element.strokeStyle;
      context.strokeRect(0, 0, element.width, element.height);
      break;
    }
    case "freedraw": {
      context.save();
      context.lineWidth = 3;
      context.strokeStyle = element.strokeStyle;
      element.points.forEach((point, index) => {
        let [x, y] = point;
        x = x - element.x;
        y = y - element.y;
        if (!index) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });

      context.stroke();

      context.restore();
      break;
    }
    default: {
    }
  }
  context.globalAlpha = 1;
};

const getCanvasPadding = (element) =>
  element.type === "freedraw" ? element.strokeWidth * 12 : 20;

const drawElementFromCanvas = (elementWithCanvas, context, renderConfig) => {
  const element = elementWithCanvas.element;
  const padding = getCanvasPadding(element);
  let [x1, y1, x2, y2] = getElementAbsoluteCoords(element);
  if (element.type === "freedraw") {
    [x1, y1, x2, y2] = getElementAbsoluteCoords({
      ...element,
      points: element.points.map((p) => {
        return [p[0] - element.x, p[1] - element.y];
      }),
    });
  }
  const cx = ((x1 + x2) / 2 + renderConfig.scrollX) * window.devicePixelRatio;
  const cy = ((y1 + y2) / 2 + renderConfig.scrollY) * window.devicePixelRatio;
  console.log('cx...', elementWithCanvas)
  context.save();
  context.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);

  context.translate(cx, cy);

  context.drawImage(
    elementWithCanvas.canvas,
    (-(x2 - x1) / 2) * window.devicePixelRatio -
      (padding * elementWithCanvas.canvasZoom) / elementWithCanvas.canvasZoom,
    (-(y2 - y1) / 2) * window.devicePixelRatio -
      (padding * elementWithCanvas.canvasZoom) / elementWithCanvas.canvasZoom,
    elementWithCanvas.canvas.width / elementWithCanvas.canvasZoom,
    elementWithCanvas.canvas.height / elementWithCanvas.canvasZoom
  );

  context.restore();

  // Clear the nested element we appended to the DOM
};
