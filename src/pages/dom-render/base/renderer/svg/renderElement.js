export const deleteElementCache = () => {};

export const clearElementCache = () => {};

const TO_FIXED_PRECISION = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
function med(A, B) {
  return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
}
const getSvgPathFromStroke = (points) => {
  if (!points.length) {
    return "";
  }

  const max = points.length - 1;

  return points
    .reduce(
      (acc, point, i, arr) => {
        if (i === max) {
          acc.push(point, med(point, arr[0]), "L", arr[0], "Z");
        } else {
          acc.push(point, med(point, arr[i + 1]));
        }
        return acc;
      },
      ["M", points[0], "Q"]
    )
    .join(" ")
    .replace(TO_FIXED_PRECISION, "$1");
};
export const renderElementToSvg = (element, renderConfig, appState) => {
  let el;
  switch (element.type) {
    case "rectangle": {
      el = (
        <svg
          id={element.id}
          key={element.id}
          width={element.width}
          height={element.height}
          style={{
            position: "absolute",
            left: `${element.x}px`,
            top: `${element.y}px`,
            background: "",
          }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect
            width={element.width}
            height={element.height}
            style={{
              fill: "none",
              strokeWidth: element.strokeWidth,
              stroke: element.strokeStyle,
            }}
          />
        </svg>
      );
      break;
    }
    case "freedraw": {
      console.log("points===", element);
      const points = element.points
        .map((p) => [p[0] - element.x, p[1] - element.y]);
      el = (
        <svg
          id={element.id}
          key={element.id}
          //   width={element.width}
          //   height={element.height}
          style={{
            position: "absolute",
            left: `${element.x}px`,
            top: `${element.y}px`,
            background: "grey",
          }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d={getSvgPathFromStroke(points)}
            stroke="blue"
            stroke-width="5"
            fill="none"
          />

          {/* <polyline
            points={points}
            style={{
              fill: "none",
              strokeWidth: element.strokeWidth,
              stroke: element.strokeStyle,
            }}
          /> */}
        </svg>
      );
      break;
    }
    default: {
    }
  }
  return el;
};
