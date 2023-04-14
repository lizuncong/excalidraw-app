// import { getElementAbsoluteCoords, distance } from "@/util";
import { SVG_NS } from "./renderScene";

const elementCache = {};
export const deleteElementCache = (element) => {
  // delete elementCache[element.id];
};

export const clearElementCache = () => {};

export const renderElementToSvg = (
  element,
  renderConfig,
  appState,
  { minX, minY, svg, originChange }
) => {
  let el;
  if (
    !originChange &&
    elementCache[element.id] &&
    element !== appState.draggingElement
  ) {
    return;
  }

  switch (element.type) {
    case "rectangle": {
      const x = element.x - minX + Math.ceil(element.strokeWidth / 2);
      const y = element.y - minY;
      el = elementCache[element.id] || document.createElementNS(SVG_NS, "rect");
      // if (
      //   el.__x === x &&
      //   el.__y === y &&
      //   el.__width === element.width &&
      //   el.__height === element.height
      // )
      //   return;
      el.setAttribute("id", element.id);
      // console.log('x....', element.x, minX)
      el.setAttribute("x", x + Math.ceil(element.strokeWidth / 2));
      el.setAttribute("y", y + Math.ceil(element.strokeWidth / 2));
      el.setAttribute("width", element.width);
      el.setAttribute("height", element.height);
      el.setAttribute("fill", "none");
      el.setAttribute("stroke-width", element.strokeWidth);
      el.setAttribute("stroke", element.strokeStyle);
      el.__x = x;
      el.__y = y;
      el.__width = element.width;
      el.__height = element.height;
      break;
    }
    case "freedraw": {
      const points = element.points.map((p) => [
        p[0] - minX + Math.ceil(element.strokeWidth / 2),
        p[1] - minY + Math.ceil(element.strokeWidth / 2),
      ]);
      el =
        elementCache[element.id] ||
        document.createElementNS(SVG_NS, "polyline");
      el.setAttribute("id", element.id);
      el.setAttribute("points", points.join(" "));
      el.setAttribute("fill", "none");
      el.setAttribute("stroke-width", element.strokeWidth);
      el.setAttribute("stroke", element.strokeStyle);
      break;
    }
    default: {
    }
  }
  if (!elementCache[element.id]) {
    elementCache[element.id] = el;
    svg.appendChild(el);
  }

  return el;
};
