// import { getElementAbsoluteCoords, distance } from "@/util";

export const deleteElementCache = () => {};

export const clearElementCache = () => {};

export const renderElementToSvg = (element, renderConfig, appState, { minX, minY }) => {
  let el;
  switch (element.type) {
    case "rectangle": {
      const x = element.x - minX;
      const y = element.y - minY;
      el = `
          <rect
            x=${x + Math.ceil(element.strokeWidth / 2)}
            y=${y + Math.ceil(element.strokeWidth / 2)}
            width=${element.width}
            height=${element.height}
            style="
              fill: none;
              stroke-width: ${element.strokeWidth};
              stroke: ${element.strokeStyle};
            "
          />`;
      break;
    }
    case "freedraw": {
   
      const points = element.points.map((p) => [
        p[0] - minX + Math.ceil(element.strokeWidth / 2),
        p[1] - minY + Math.ceil(element.strokeWidth / 2),
      ]);
      el = (
        `<polyline
            points="${points.join(' ')}"
            style="
              fill: none;
              stroke-width: ${element.strokeWidth};
              stroke: ${element.strokeStyle};
            "
          />`
      );
      break;
    }
    default: {
    }
  }
  return el;
};
