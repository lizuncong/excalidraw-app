// import { getElementAbsoluteCoords, distance } from "@/util";
import { SVG_NS } from "./renderScene";

const elementCache = {};
export const deleteElementCache = () => {};

export const clearElementCache = () => {};

export const renderElementToSvg = (
  element,
  renderConfig,
  appState,
  { minX, minY, svg }
) => {
  let el;
  switch (element.type) {
    case "rectangle": {
      const x = element.x - minX;
      const y = element.y - minY;
      el = document.createElementNS(SVG_NS, "rect");
      el.setAttribute("x", x + Math.ceil(element.strokeWidth / 2));
      el.setAttribute("y", y + Math.ceil(element.strokeWidth / 2));
      el.setAttribute("width", element.width);
      el.setAttribute("height", element.height);
      el.setAttribute("fill", "none");
      el.setAttribute("stroke-width", element.strokeWidth);
      el.setAttribute("stroke", element.strokeStyle);
      break;
    }
    case "freedraw": {
      const points = element.points.map((p) => [
        p[0] - minX + Math.ceil(element.strokeWidth / 2),
        p[1] - minY + Math.ceil(element.strokeWidth / 2),
      ]);
      el = document.createElementNS(SVG_NS, "polyline");
      el.setAttribute("points", points.join(" "));
      el.setAttribute("fill", "none");
      el.setAttribute("stroke-width", element.strokeWidth);
      el.setAttribute("stroke", element.strokeStyle);
      break;
    }
    default: {
    }
  }
  svg.appendChild(el)
  return el;
};
