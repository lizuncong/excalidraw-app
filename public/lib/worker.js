let canvas = null;
let ctxWorker = null;
let canvasWidth;
let canvasHeight;
let elements = [];
let count = 15000;
self.onmessage = (event) => {
  const { canvasWorker, type, scale } = event.data;
  elements = generateElements(count);
  if (type === "redraw") {
    startCounting();
  } else {
    canvas = canvasWorker;
    ctxWorker = canvas.getContext("2d");
    ctxWorker.scale(scale, scale);
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    startCounting();
  }
};

function startCounting() {
  // setInterval(() => {
  elements = generateElements(count);
  redrawCanvasB();
  // }, 100);
}

function redrawCanvasB() {
  console.log("redraw...", elements.length);
  ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
  ctxWorker.save();

  elements.forEach((ele) => {
    ctxWorker.save();

    ctxWorker.lineJoin = "round";
    ctxWorker.lineCap = "round";
    ctxWorker.lineWidth = ele.strokeWidth;
    ctxWorker.strokeStyle = ele.strokeStyle;
    ctxWorker.strokeRect(0, 0, ele.width, ele.height);

    ctxWorker.restore();
  });

  ctxWorker.restore();
}

const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
const getRandomValue = (n, m) => {
  return Number((Math.random() * (m - n) + n).toFixed(5));
};

const generateElements = (count) => {
  const elements = [];
  let element;
  for (let i = 0; i < count; i++) {
    let x = getRandomValue(0, canvasWidth);
    let y = getRandomValue(0, canvasHeight);
    element = {
      x,
      y,
      strokeStyle: rgb(),
    };
    const width = Math.abs(getRandomValue(-x, canvasWidth - x)) + 2;
    const height = Math.abs(getRandomValue(-y, canvasHeight - y)) + 2;
    element.width = width;
    element.height = height;

    elements.push(element);
  }

  return elements;
};
