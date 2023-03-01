import { unstable_batchedUpdates } from "react-dom";

export const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = clientX - offsetLeft - scrollX;
  const y = clientY - offsetTop - scrollY;
  return { x, y };
};

//rgb颜色随机
export const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

export const throttleRAF = (fn, opts) => {
  let timerId = null;
  let lastArgs = null;
  let lastArgsTrailing = null;

  const scheduleFunc = (args) => {
    timerId = window.requestAnimationFrame(() => {
      timerId = null;
      fn(...args);
      lastArgs = null;
      if (lastArgsTrailing) {
        lastArgs = lastArgsTrailing;
        lastArgsTrailing = null;
        scheduleFunc(lastArgs);
      }
    });
  };

  const ret = (...args) => {
    if (process.env.NODE_ENV === "test") {
      fn(...args);
      return;
    }
    lastArgs = args;
    if (timerId === null) {
      scheduleFunc(lastArgs);
    } else if (opts?.trailing) {
      lastArgsTrailing = args;
    }
  };
  ret.flush = () => {
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
    if (lastArgs) {
      fn(...(lastArgsTrailing || lastArgs));
      lastArgs = lastArgsTrailing = null;
    }
  };
  ret.cancel = () => {
    lastArgs = lastArgsTrailing = null;
    if (timerId !== null) {
      cancelAnimationFrame(timerId);
      timerId = null;
    }
  };
  return ret;
};
export const withBatchedUpdatesThrottled = (func) => {
  return throttleRAF((event) => {
    unstable_batchedUpdates(func, event);
  });
};

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

export const rotate = (x1, y1, x2, y2, angle) =>
  // 𝑎′𝑥=(𝑎𝑥−𝑐𝑥)cos𝜃−(𝑎𝑦−𝑐𝑦)sin𝜃+𝑐𝑥
  // 𝑎′𝑦=(𝑎𝑥−𝑐𝑥)sin𝜃+(𝑎𝑦−𝑐𝑦)cos𝜃+𝑐𝑦.
  // https://math.stackexchange.com/questions/2204520/how-do-i-rotate-a-line-segment-in-a-specific-point-on-the-line
  [
    (x1 - x2) * Math.cos(angle) - (y1 - y2) * Math.sin(angle) + x2,
    (x1 - x2) * Math.sin(angle) + (y1 - y2) * Math.cos(angle) + y2,
  ];

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
export const getCommonBounds = (elements) => {
  if (!elements.length) {
    return [0, 0, 0, 0];
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  elements.forEach((element) => {
    const [x1, y1, x2, y2] = getElementBounds(element);
    minX = Math.min(minX, x1);
    minY = Math.min(minY, y1);
    maxX = Math.max(maxX, x2);
    maxY = Math.max(maxY, y2);
  });

  return [minX, minY, maxX, maxY];
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

export const distance = (x, y) => Math.abs(x - y);

export const getSizeFromPoints = (points) => {
  const xs = points.map((point) => point[0]);
  const ys = points.map((point) => point[1]);
  return {
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
  };
};

let testIdBase = 0;
export const randomId = () => `id${testIdBase++}`;
export const randomInteger = () => Math.floor(Math.random() * 2 ** 31);

export const generateExcalidrawElements = () => {
  const freeDrawElements =
    JSON.parse(localStorage.getItem("free-draw-elements")) || [];
  const result = freeDrawElements.map((ele) => {
    const points = ele.points.map((p) => {
      return [p[0] - ele.x, p[1] - ele.y];
    });
    const { width, height } = getSizeFromPoints(points);
    return {
      id: randomId(),
      type: "freedraw",
      x: ele.x,
      y: ele.y,
      width: width,
      height: height,
      angle: 0,
      strokeColor: ele.strokeStyle,
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      roundness: null,
      seed: randomInteger(),
      version: 1,
      versionNonce: 0,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
      points: points,
      pressures: [],
      simulatePressure: true,
      lastCommittedPoint: points[points.length - 1],
    };
  });
  return result;
};

window.__generateExcalidrawElements = generateExcalidrawElements;
