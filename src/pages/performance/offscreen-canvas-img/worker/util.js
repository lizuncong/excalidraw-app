export const getBoundsFromPoints = (element) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let points = element.points;
  if (element.type === "freedraw") {
    points = element.points.map((p) => {
      return [p[0] - element.x, p[1] - element.y];
    });
  }
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  return [minX, minY, maxX, maxY];
};
export const distance = (x, y) => Math.abs(x - y);
export const getFontString = ({ fontSize, fontFamily }) => {
  return `${fontSize}px ${fontFamily}, Segoe UI Emoji`;
};
export const getElementAbsoluteCoords = (element) => {
  if (element.type === "freedraw") {
    const [minX, minY, maxX, maxY] = getBoundsFromPoints(element);
    const x1 = minX + element.x;
    const y1 = minY + element.y;
    const x2 = maxX + element.x;
    const y2 = maxY + element.y;
    return [x1, y1, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2];
  }
  return [
    element.x,
    element.y,
    element.x + element.width,
    element.y + element.height,
    element.x + element.width / 2,
    element.y + element.height / 2,
  ];
};
export const getElementBounds = (element) => {
  let bounds;

  const [x1, y1, x2, y2, cx, cy] = getElementAbsoluteCoords(element);

  if (element.type === "freedraw") {
    const [minX, minY, maxX, maxY] = getBoundsFromPoints(element);

    return [
      minX + element.x,
      minY + element.y,
      maxX + element.x,
      maxY + element.y,
    ];
  } else {
    const [x11, y11] = rotate(x1, y1, cx, cy, element.angle);
    const [x12, y12] = rotate(x1, y2, cx, cy, element.angle);
    const [x22, y22] = rotate(x2, y2, cx, cy, element.angle);
    const [x21, y21] = rotate(x2, y1, cx, cy, element.angle);
    const minX = Math.min(x11, x12, x22, x21);
    const minY = Math.min(y11, y12, y22, y21);
    const maxX = Math.max(x11, x12, x22, x21);
    const maxY = Math.max(y11, y12, y22, y21);
    bounds = [minX, minY, maxX, maxY];
  }

  return bounds;
};
export const rotate = (x1, y1, x2, y2, angle) =>
  // 𝑎′𝑥=(𝑎𝑥−𝑐𝑥)cos𝜃−(𝑎𝑦−𝑐𝑦)sin𝜃+𝑐𝑥
  // 𝑎′𝑦=(𝑎𝑥−𝑐𝑥)sin𝜃+(𝑎𝑦−𝑐𝑦)cos𝜃+𝑐𝑦.
  // https://math.stackexchange.com/questions/2204520/how-do-i-rotate-a-line-segment-in-a-specific-point-on-the-line
  [
    (x1 - x2) * Math.cos(angle) - (y1 - y2) * Math.sin(angle) + x2,
    (x1 - x2) * Math.sin(angle) + (y1 - y2) * Math.cos(angle) + y2,
  ];

export const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { zoom, offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const zoomValue = zoom ? zoom.value : 1;
  const x = (clientX - offsetLeft) / zoomValue - scrollX;
  const y = (clientY - offsetTop) / zoomValue - scrollY;
  return { x, y };
};
