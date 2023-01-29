export const renderElement = (element, context, renderConfig, appState) => {
  switch (element.type) {
    case "rectangle": {
      generateElementShape(element);
    //   const elementWithCanvas = generateElementWithCanvas(
    //     element,
    //     renderConfig
    //   );
      // drawElementFromCanvas(elementWithCanvas, rc, context, renderConfig);

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
          const w = element.width;
          const h = element.height;
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

const generateElementWithCanvas = (
  element,
  renderConfig
) => {
//   const zoom = renderConfig ? renderConfig.zoom : 1;
//   const prevElementWithCanvas = elementWithCanvasCache.get(element);
//   const shouldRegenerateBecauseZoom =
//     prevElementWithCanvas &&
//     prevElementWithCanvas.canvasZoom !== zoom.value &&
//     !renderConfig?.shouldCacheIgnoreZoom;
//   const boundTextElementVersion = getBoundTextElement(element)?.version || null;

//   if (
//     !prevElementWithCanvas ||
//     shouldRegenerateBecauseZoom ||
//     prevElementWithCanvas.theme !== renderConfig.theme ||
//     prevElementWithCanvas.boundTextElementVersion !== boundTextElementVersion
//   ) {
//     const elementWithCanvas = generateElementCanvas(
//       element,
//       zoom,
//       renderConfig
//     );

//     elementWithCanvasCache.set(element, elementWithCanvas);

//     return elementWithCanvas;
//   }
//   return prevElementWithCanvas;
};
export const setShapeForElement = (element, shape) =>
  shapeCache.set(element, shape);
