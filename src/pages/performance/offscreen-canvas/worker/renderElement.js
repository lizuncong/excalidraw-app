import { getElementAbsoluteCoords, distance, getFontString } from "./util";
export const renderElement = (element, context, renderConfig, appState) => {
  const elementWithCanvas = generateElementWithCanvas(element, renderConfig);
  drawElementFromCanvas(elementWithCanvas, context, renderConfig);
};

export let elementWithCanvasCache = {};

export const deleteElementCache = (element) => {
  delete elementWithCanvasCache[element.id]
};
export const clearElementCache = () => {
  elementWithCanvasCache = {};
};

const generateElementWithCanvas = (element, renderConfig) => {
  const prevElementWithCanvas = elementWithCanvasCache[element.id];
  // 导出图片时，默认zoom为1，因此这里加个notusecache配置重新生成canvas
  if (prevElementWithCanvas && !renderConfig.notUseCache) {
    return prevElementWithCanvas;
  }
  const elementWithCanvas = generateElementCanvas(
    element,
    renderConfig.zoom,
    renderConfig
  );
  if (!renderConfig.notUseCache) {
    elementWithCanvasCache[element.id] = elementWithCanvas;
  }

  return elementWithCanvas;
};
// for worker
const isWindow = typeof document === "object";

const generateElementCanvas = (element, zoom, renderConfig) => {
  const devicePixelRatio = isWindow
    ? window.devicePixelRatio
    : renderConfig.devicePixelRatio;

  const padding = getCanvasPadding(element);

  let canvasOffsetX = 0;
  let canvasOffsetY = 0;
  let canvas;
  let context;
  if (element.type === "freedraw") {
    let [x1, y1, x2, y2] = getElementAbsoluteCoords(element);
    let canvasOffsetX = 0;
    let canvasOffsetY = 0;
    canvas = new OffscreenCanvas(
      distance(x1, x2) * devicePixelRatio * zoom.value +
        padding * zoom.value * 2,
      distance(y1, y2) * devicePixelRatio * zoom.value +
        padding * zoom.value * 2
    );
    context = canvas.getContext("2d");
    canvasOffsetX =
      element.x > x1
        ? distance(element.x, x1) * devicePixelRatio * zoom.value
        : 0;

    canvasOffsetY =
      element.y > y1
        ? distance(element.y, y1) * zoom.value * devicePixelRatio
        : 0;
    context.translate(canvasOffsetX, canvasOffsetY);
  } else {
    canvas = new OffscreenCanvas(
      element.width * devicePixelRatio * zoom.value + padding * zoom.value * 2,
      element.height * devicePixelRatio * zoom.value + padding * zoom.value * 2
    );
    context = canvas.getContext("2d");
  }

  context.save();
  context.translate(padding * zoom.value, padding * zoom.value);

  context.scale(devicePixelRatio * zoom.value, devicePixelRatio * zoom.value);

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
      context.lineWidth = element.strokeWidth;
      context.strokeStyle = renderConfig.strokeStyle || element.strokeStyle;
      context.strokeRect(0, 0, element.width, element.height);
      break;
    }
    case "text": {
      context.font = getFontString(element);
      context.fillStyle = renderConfig.fillStyle || element.strokeColor;
      context.textAlign = element.textAlign;
      const lines = element.text.split("\n");
      const lineHeight = lines.length ? element.height / lines.length : 18;
      context.textBaseline = "bottom";
      for (let index = 0; index < lines.length; index++) {
        context.fillText(lines[index], 0, (index + 1) * lineHeight);
      }
      break;
    }
    case "freedraw": {
      context.save();
      context.lineWidth = element.strokeWidth;
      context.strokeStyle = renderConfig.strokeStyle || element.strokeStyle;
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
  const devicePixelRatio = isWindow
    ? window.devicePixelRatio
    : renderConfig.devicePixelRatio;
  const element = elementWithCanvas.element;
  const padding = getCanvasPadding(element);
  let [x1, y1, x2, y2] = getElementAbsoluteCoords(element);
  if (element.type === "freedraw") {
    [x1, y1, x2, y2] = getElementAbsoluteCoords(element);
  }
  const cx = ((x1 + x2) / 2 + renderConfig.scrollX) * devicePixelRatio;
  const cy = ((y1 + y2) / 2 + renderConfig.scrollY) * devicePixelRatio;
  context.save();
  context.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
  context.translate(cx, cy);
  context.drawImage(
    elementWithCanvas.canvas,
    (-(x2 - x1) / 2) * devicePixelRatio -
      (padding * elementWithCanvas.canvasZoom.value) /
        elementWithCanvas.canvasZoom.value,
    (-(y2 - y1) / 2) * devicePixelRatio -
      (padding * elementWithCanvas.canvasZoom.value) /
        elementWithCanvas.canvasZoom.value,
    elementWithCanvas.canvas.width / elementWithCanvas.canvasZoom.value,
    elementWithCanvas.canvas.height / elementWithCanvas.canvasZoom.value
  );

  context.restore();

  // Clear the nested element we appended to the DOM
};
