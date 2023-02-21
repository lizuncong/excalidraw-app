export const renderElement = (element, context, renderConfig, appState) => {
  switch (element.type) {
    case "rectangle": {
      generateElementShape(element);
      const elementWithCanvas = generateElementWithCanvas(
        element,
        renderConfig
      );
      drawElementFromCanvas(elementWithCanvas, context, renderConfig);

      break;
    }
    default: {
      throw new Error(`Unimplemented type ${element.type}`);
    }
  }
};

const shapeCache = new WeakMap();
const elementWithCanvasCache = new WeakMap();
const generateElementShape = (element) => {
  let shape = shapeCache.get(element);

  if (shape === undefined) {
    elementWithCanvasCache.delete(element);

    switch (element.type) {
      case "rectangle":
        if (element.roundness) {
          // const w = element.width;
          // const h = element.height;
          //   const r = getCornerRadius(Math.min(w, h), element);
          //   shape = generator.path(
          //     `M ${r} 0 L ${w - r} 0 Q ${w} 0, ${w} ${r} L ${w} ${
          //       h - r
          //     } Q ${w} ${h}, ${w - r} ${h} L ${r} ${h} Q 0 ${h}, 0 ${
          //       h - r
          //     } L 0 ${r} Q 0 0, ${r} 0`,
          //     generateRoughOptions(element, true)
          //   );
        }
        setShapeForElement(element, shape);

        break;
      default: {
        throw new Error(`Unimplemented type ${element.type}`);
      }
    }
  }
};

const generateElementWithCanvas = (element, renderConfig) => {
  const zoom = renderConfig.zoom || 1;
  const prevElementWithCanvas = elementWithCanvasCache.get(element);
  if (!prevElementWithCanvas) {
    const elementWithCanvas = generateElementCanvas(
      element,
      zoom,
      renderConfig
    );

    // elementWithCanvasCache.set(element, elementWithCanvas);

    return elementWithCanvas;
  }
  return prevElementWithCanvas;
};
let rightContainer = document.getElementById('placeholder')
let previewCanvas = null
const generateElementCanvas = (element, zoom, renderConfig) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const padding = getCanvasPadding(element);
  if(!rightContainer){
    rightContainer = document.getElementById('placeholder')
  }
  if(previewCanvas){
    rightContainer.removeChild(previewCanvas)
  }
  previewCanvas = canvas;
  rightContainer.appendChild(previewCanvas)
  
  let canvasOffsetX = 0;
  let canvasOffsetY = 0;

  canvas.width = 
    element.width * window.devicePixelRatio * zoom + padding * zoom * 2;
  canvas.height =
    element.height * window.devicePixelRatio * zoom + padding * zoom * 2;
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
      context.strokeStyle = 'red'
      // context.strokeRect(20,20,50,50);
      context.strokeRect(0,0,element.width,element.height);
      // rc.draw(getShapeForElement(element)!);
      break;
    }

    default: {
    }
  }
  context.globalAlpha = 1;
};
export const setShapeForElement = (element, shape) =>
  shapeCache.set(element, shape);

const getCanvasPadding = (element) =>
  element.type === "freedraw" ? element.strokeWidth * 12 : 20;

const drawElementFromCanvas = (elementWithCanvas, context, renderConfig) => {
  const element = elementWithCanvas.element;
  const padding = getCanvasPadding(element);
  let [x1, y1, x2, y2] = [
    element.x,
    element.y,
    element.x + element.width,
    element.y + element.height,
  ];

  const cx = ((x1 + x2) / 2 + renderConfig.scrollX) * window.devicePixelRatio;
  const cy = ((y1 + y2) / 2 + renderConfig.scrollY) * window.devicePixelRatio;

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
