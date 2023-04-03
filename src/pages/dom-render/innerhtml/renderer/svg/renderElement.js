import { getElementAbsoluteCoords, distance } from "@/util";

export const deleteElementCache = () => {};

export const clearElementCache = () => {};

export const renderElementToSvg = (element, renderConfig, appState) => {
  let el;
  switch (element.type) {
    case "rectangle": {
      el = `<svg
          id=${element.id}
          key=${element.id}
          width=${element.width + element.strokeWidth * 2}
          height=${element.height + element.strokeWidth * 2}
          style="
            position: absolute;
            left: ${element.x}px;
            top: ${element.y}px;
            // background: grey;
          "
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect
            x=${Math.ceil(element.strokeWidth / 2)}
            y=${Math.ceil(element.strokeWidth / 2)}
            width=${element.width}
            height=${element.height}
            style="
              fill: none;
              stroke-width: ${element.strokeWidth};
              stroke: ${element.strokeStyle};
            "
          />
        </svg>`;
      break;
    }
    case "freedraw": {
      let [x1, y1, x2, y2] = getElementAbsoluteCoords(element);
      const width = distance(x1, x2);
      const height = distance(y1, y2);
      const points = element.points.map((p) => [
        p[0] - x1 + Math.ceil(element.strokeWidth / 2),
        p[1] - y1 + Math.ceil(element.strokeWidth / 2),
      ]);
      el = (
        `<svg
          id=${element.id}
          key=${element.id}
          width=${width + element.strokeWidth * 2}
          height=${height + element.strokeWidth * 2}
          style="
            position: absolute;
            left: ${x1}px;
            top: ${y1}px;
            // background: grey;
          "
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <polyline
            points=${points.join(" ")}
            style="
              fill: none;
              stroke-width: ${element.strokeWidth};
              stroke: ${element.strokeStyle};
            "
          />
        </svg>`
      );
      break;
    }
    default: {
    }
  }
  return el;
};
